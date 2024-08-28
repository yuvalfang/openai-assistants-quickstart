export let assistantId = "asst_J66KAtjsEMJGPIV3lmpKF4iK"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
