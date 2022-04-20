<template>
  <a-form :model="formState" name="radioForm" :rules="rules">
    <a-form-item label="必填选项" name="radioGroup5">
      <a-radio-group v-model:value="formState.radioGroup5" :options="options" @change="handleChange" />
    </a-form-item>

<a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
    <!-- <a-button type="primary" html-type="submit">Submit</a-button> -->
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";


const options = ref([
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
]);

// 校验规则
const rules = {
  radioGroup5: [
    {
      required: true,
      message: "请选择",
      trigger: 'change'

    },
  ],
};

type FormState = {
  radioGroup5: Array<string>;
};

const formState = reactive<FormState>({
  radioGroup5: [],
});

const handleChange = (value: any) => {
  console.log(value);
};
</script>

<style lang="less" scoped></style>
