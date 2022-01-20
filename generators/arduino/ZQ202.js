/**
 * Visual Blocks Language
 *
 * Copyright 2020 Arthur Zheng.
 * https://github.com/zhengyangliu/scratch-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Arduino.ZQ202');

goog.require('Blockly.Arduino');

Blockly.Arduino['arduino_pinZQ_zq202setDigitalOutput'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'High';
  Blockly.Arduino.setups_['zq202setDigitalOutput' + arg0] = 'pinMode(' + arg0 + ', OUTPUT);';
  var code = "digitalWrite(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

Blockly.Arduino['arduino_pinZQ_menu_level'] = function(block) {
  var code = block.getFieldValue('level') || 'High';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_pinZQ_zq202SetPwmOutput'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  //var arg2 = '14';//block.getFieldValue('CH') || '0';

  Blockly.Arduino.setups_['zq202SetPwmOutput' + arg0] = 'ledcSetup(' + arg0 + ', 490, 8);';
  Blockly.Arduino.setups_['zq202SetPwmOutput2' + arg0] = 'ledcAttachPin(' + arg0 + ', ' + arg0 + ');';

  var code = "ledcWrite(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

Blockly.Arduino['arduino_pinZQ_zq202readDigitalPin'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var code = "digitalRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_pinZQ_zq202readAnalogPin'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || 'P0';
  var code = "analogRead(" + arg0 + ")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//气泵
Blockly.Arduino['arduino_pinZQ_zq202qibeng'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = block.getFieldValue('LEVEL') || 'High';
  Blockly.Arduino.setups_['zq202qibeng' + arg0] = 'pinMode(' + arg0 + ', OUTPUT);';
  var code = "digitalWrite(" + arg0 + ", " + arg1 + ");\n";
  return code;
};

//蜂鸣器端口需修改
Blockly.Arduino['arduino_pinZQ_zq202buzzer'] = function(block) {
  Blockly.Arduino.setups_['zq202qibeng'] = 'pinMode( 5 , OUTPUT);';
  var code = "digitalWrite(5);\n";
  return code;
};

  //运行键端口须修改
Blockly.Arduino['arduino_pinZQ_zq202run'] = function(block) {
  Blockly.Arduino.setups_['zq202qibeng'] = 'pinMode( 2 , INPUT);';
  var code = "digitalRead(2);\n";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/*
Blockly.Arduino['arduino_pin_zq202SetServoOutput'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  var arg2 = block.getFieldValue('CH') || '0';

  Blockly.Arduino.includes_['zq202SetServoOutput'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['zq202SetServoOutput' + arg0] = 'Servo servo_' + arg0 + ';';
  Blockly.Arduino.setups_['zq202SetServoOutput' + arg0] = 'servo_' + arg0 + '.attach' + '(' + arg0 + ', ' + arg2 + ');';

  var code = 'servo_' + arg0 + '.write' + '(' + arg1 + ');\n';
  return code;
};

Blockly.Arduino['arduino_pin_esp32AttachInterrupt'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = block.getFieldValue('MODE') || 'RISING';

  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);

  Blockly.Arduino.definitions_['definitions_ISR_' + arg1 + arg0] =
    'void IRAM_ATTR ISR_' + arg1 + '_' + arg0 + '() {\n' + branch + '}';

  var code = 'attachInterrupt(' + arg0 + ', ISR_' + arg1 + '_' + arg0 + ', ' + arg1 + ');\n';
  return code;
};

Blockly.Arduino['arduino_pin_esp32DetachInterrupt'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';

  var code = 'detachInterrupt(' + arg0 + ');\n';
  return code;
};

Blockly.Arduino['arduino_sensor_esp32ReadHallSensor'] = function() {
  var code = "hallRead()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/
