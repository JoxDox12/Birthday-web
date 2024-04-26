let bday = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    document.getElementById('name1').innerHTML = name;
    document.getElementById('age1').innerHTML = age;
    document.getElementById('birthday').style.display = 'block';
    document.getElementById('christmas').style.display = 'none';
}
document.getElementById('bday').addEventListener("click", bday);
let xmas = () => {
    let name = document.getElementById('name').value;
    document.getElementById('name2').innerHTML = name;
    document.getElementById('christmas').style.display = 'block';
    document.getElementById('birthday').style.display = 'none';
}
document.getElementById('xmas').addEventListener("click", xmas);