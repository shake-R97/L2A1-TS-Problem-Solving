Blog Post ->

Question 1: What are some differences between interfaces and types in TypeScript?

Answer(in Bangla): দুটোই TypeScript-এ ডেটার  গঠন define করতে ব্যবহার হয়। Interface মূলত non-primitive data type (যেমন: Object, Array, Function ইত্যাদি) define করার জন্য ব্যবহার করা হয়,
আর Type সবচেয়ে ভালোভাবে primitive data type (যেমন: Union type, string, boolean, number ইত্যাদি) define করার জন্য ব্যবহার করা হয়।



Question 2 : Explain the difference between any, unknown, and never types in TypeScript.

Answer(in Bangla): TypeScript-এ any, unknown, এবং never — 
এই তিনটি type আলাদা আলাদা উদ্দেশ্যে ব্যবহার করা হয় এবং এগুলোর আচরণ একে-অপরের থেকে অনেক ভিন্ন। any type ব্যবহার করলে TypeScript প্রায় সব ধরনের type checking বন্ধ করে দেয়। এর মানে হলো, কোনো ভেরিয়েবলের উপর যেকোনো অপারেশন করা যায়, এমনকি সেটা ভুল হলেও TypeScript কোনো error দেখায় না। unknown বোঝায় যে ভেরিয়েবলের type এখনো জানা নেই, কিন্তু সেটাকে ব্যবহার করার আগে অবশ্যই type check করতে হবে। অন্যদিকে, never type এমন function বা variable বোঝাতে ব্যবহার হয় যেগুলো কখনোই কোনো value return করে না।