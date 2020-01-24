# _Beep Boop_

#### _A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with a surprise!, 01.24.2020_

#### By _**Benjamin Thom**_

## Description

_The following exceptions apply to all user inputs:_

- Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
- Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
- Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

_The first exception should apply unless the second exception does, etc._

## Setup/Installation Requirements

* _Visit my GitHub at github.com/benjamin-thompdx and clone or download the repository named, Beep-Boop_
* _You can access the repository here: github.com/benjamin-thompdx/Beep-Boop_
* _Once cloned or downloaded to your local directory, open the Beep-Boop folder and navigate to the index.html file_
* _You can then open the index.html file in your web browser to try out the appilcation._
* _Email our team at BeepBoop.io if you would like to make a suggestion for future versions - Have fun!_

_Note: when using this application, all inputs must be numerical values._

## Behavioral Driven Developement Specifications



| Behavior       | Input    | Output     |
| :------------- | :----------: | -----------: |
| Check that all inputted values are numbers, and if inputs are not numbers return an error | Example: Dog | Example: "Error, please insert a number" |
| The program returns a range of numbers from 0 to the users inputted number | Example: "4" | Example: "0,1,2,3,4" |
| Test each element for a "3" | "3" | Return "I'm sorry, Dave. I'm afraid I can't do that." |
| Test each element for a "2" | "2" | Return "Boop!" |
| Test each element for a "1" | "1" | Return "Beep!" |
| Manage order of precedence with "3" being the most important | Example: "123" | Example: Return "I'm sorry, Dave. I'm afraid I can't do that." |

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have feedback, found a bug, or just want to say hi? See below for contact information!
Benjamin@BeepBoop.io_

## Technologies Used

_Git, HTML, CSS, Bootstrap, JavaScript, jQuery_

### License

This software is produced under the MIT license. Copyright (c) 2020 **_Benjamin Thom_**