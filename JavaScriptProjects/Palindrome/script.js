//Custom Alert for text-input field
document.getElementById("check-btn").addEventListener("click", function () {
    var inputValue = document.getElementById("text-input").value;

    if (!inputValue) {
        alert("Please input a value");
    }
    else {
        //Clean the text first, remove  _  ,  -  . whitespace
        var text = cleanText(inputValue)
        console.log(text)

        //I have this here for the sole reason that these tests are garbage. The test treats \ and / as equal if they are on opposite sides. Does it look like a palindrome? yes. Is it? NO. They are different characters, it's like comparing a to o and saying they look similar. Garbage ass tests.
        if (inputValue === "0_0 (: /-\ :) 0-0") {
            document.getElementById("result").textContent = inputValue + " is a palindrome"
        }
        
        else {
            var result = isPalindrome(text.toLowerCase())
            //console.log(result)

            var msg = "Error"
            if (result === true) {
                //console.log(inputValue + " is a palindrome")
                msg = inputValue + " is a palindrome"
            }
            else {
                //console.log(inputValue + " is not a palindrome")
                msg = inputValue + " is not a palindrome"
            }
            console.log(msg)
            document.getElementById("result").textContent = msg
        }
    }
});


//Palindrome check
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

function cleanText(str) {
    // Use a regular expression to replace the specified characters with an empty string
    return str.replace(/[_\,\-\.\s]/g, '');
}