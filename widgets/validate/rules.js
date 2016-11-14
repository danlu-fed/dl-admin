import Vue from 'vue'
import Validator from 'vue-validator'

Vue.use(Validator);

Vue.validator('isInteger',{
  message: '仅支持正整数的输入！',
  check: function (val) {
    return /^[1-9]\d*$/.test(val)
  }
});