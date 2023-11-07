<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>We will declare a variable called greeting, assign an empty object {} to it, and then print the greeting variable to the console. The output will be an empty object {} because that's what you assigned to the greeting variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here 1 is a number."2" is a string.JavaScript converts 1 to a string to make the operands compatible for concatenation.The result is the string "12".
So, the output will be the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>when you use console.log(food);, it prints the original food array, which is why you get ["🍕", "🍫", "🥑", "🍔"] as the output. The modification you made to the info object's favoriteFood property does not alter the food array itself.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When you call the sayHi function without providing any arguments, the name parameter inside the function will have the default value of undefined. Therefore, the template string "Hi there, ${name}" will result in "Hi there, undefined" when logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> You initialize the count variable to 0 and have an array nums containing [0, 1, 2, 3]. Then, you use the forEach method to iterate over each element in the nums array. Inside the callback function for forEach, you check if the current num is truthy (in JavaScript, 0 is considered falsy, and all other numbers are truthy). When num is 1, it evaluates to true, and you increment the count variable by 1.

After the loop, count contains the count of truthy values in the nums array, which is 1. Therefore, the code logs 1 to the console.

</i>

</p>
</details>
