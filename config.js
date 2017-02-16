var workspace = Blockly.inject('blocklyDiv', {
	grid: {
		spacing: 20,
		length: 3,
		colour: '#ccc',
		snap: true },
	trashcan: true,
	horizontalLayout: true,
	toolbox: document.getElementById('toolbox')
});

var xml_text = "";

var languageSelector = document.querySelector('#language select');

function myUpdateFunction(event) {
	var language = languageSelector.value;
	var code = '';
	switch(language) {
		case 'javascript':
			code = Blockly.JavaScript.workspaceToCode(workspace);
			break;
		case 'python':
			code = Blockly.Python.workspaceToCode(workspace);
			break;
		case 'php':
			code = Blockly.PHP.workspaceToCode(workspace);
			break;
		default:
			code = "Not supported language."
	}
	document.getElementById('codeArea').value = code;
}

function saveBlock() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	xml_text = Blockly.Xml.domToPrettyText(xml);
}

function restoreBlock() {
	var xml = Blockly.Xml.textToDom(xml_text);
	Blockly.Xml.domToWorkspace(xml, workspace);
}

function excuteCode(){
	Blockly.JavaScript.addReservedWords('code');
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	try {
		eval(code);
	} catch (e) {
		alert(e);
	}
}

languageSelector.addEventListener('change', myUpdateFunction);
workspace.addChangeListener(myUpdateFunction);

document.getElementById('saveBlockBtn').addEventListener('click', saveBlock);
document.getElementById('restoreBlockBtn').addEventListener('click', restoreBlock);
document.getElementById('excuteCodeBtn').addEventListener('click', excuteCode);
