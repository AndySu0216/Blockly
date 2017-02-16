//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
Blockly.Blocks['string_to_object'] = {
  init: function() {
    this.jsonInit({
      "type": "string_to_object",
      "message0": "object converted from %1",
      "args0": [
        {
          "type": "field_input",
          "name": "SRC",
          "text": "default"
        }
      ],
      "inputsInline": false,
      "output": "",
      "colour": 135,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['string_to_object'] = function(block) {
  var text_src = block.getFieldValue('SRC');
  // TODO: Assemble JavaScript into code variable.
  var code = 'JSON.parse(' + text_src + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['direction_of'] = {
  init: function() {
    this.jsonInit({
      "type": "direction_of",
      "message0": "the direction of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PLINE"
        }
      ],
      "inputsInline": false,
      "output": "Number",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['direction_of'] = function(block) {
  var value_pline = Blockly.JavaScript.valueToCode(block, 'PLINE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_pline + '.direction';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['intersection_angel'] = {
  init: function() {
    this.jsonInit({
      "type": "intersection_angel",
      "message0": "angel between %1 and %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DIRECTION1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DIRECTION2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['intersection_angel'] = function(block) {
  var value_direction1 = Blockly.JavaScript.valueToCode(block, 'DIRECTION1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_direction2 = Blockly.JavaScript.valueToCode(block, 'DIRECTION2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Math.abs(' + value_direction1 + '-' + value_direction2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


