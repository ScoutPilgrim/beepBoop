# beepBoop
## Ian Christner

### How to see site

[The site can be found here]()

### Description:

#### Builds an array based on user Input and then manipulates elements of said array based on their values
##### Setup
1. $git clone https://github.com/ScoutPilgrim/beepBoop
2. $atom beepBoop
3. Open index.html in Chrome

What it does:
* User enters a valid number
* Program builds an array containing all numbers starting from 0 up to and INCLUDING the number the user entered
* Certain numerical values are converted into Strings before the final Array is shown to the User

Included Specifications:
* Makes sure the user has input a number of some sort. If no number is found they will be prompted once again to enter one.
* Once number is found, generate an Array of numbers from 0 up to and including the number entered.
* Looks if any of the numbers within the array are either 1, 2, or 3
* If a number is found that contains 1, 2, or 3, a priority is set. The priority looks like this ( 3 > 2 > 1). So, if we come across the number 31, which contains both a '3' and a '1', we would set the priority to 3, since it is greater than 1.
* Once we find our priority, we then change the value of our array element in which 1, 2, or 3 was found based on the priority we have. 


#### The MIT License

#### Copyright (c) 2019 Ian Christner

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and
associated documentation files (the "Software"), to
deal in the Software without restriction, including
without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom
the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
