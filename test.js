
arr = []
document.getElementById("add_number").addEventListener("click", AddNumber)
document.getElementById("find_max").addEventListener("click", getIt)

function AddNumber(){
    arr.push(parseInt(document.getElementById("number").value))
    document.getElementById("number").value = ""
}


function getIt(){
    let max = 0
    let second_max = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            second_max = max
            max = arr[i]
        }
    }


    document.getElementById("max").innerHTML = max
    document.getElementById("second_max").innerHTML = second_max

    return [max, second_max]
}
