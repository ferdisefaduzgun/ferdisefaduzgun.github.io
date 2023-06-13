//1. olay inputun içersinde yazılan veriyi alıyoruz.
const inputDom = document.getElementById('yaz');
let textInputValue = ""; // inputa yazılan valueler için bir let oluşturduk
inputDom.addEventListener("change", function(event){
    textInputValue = event.target.value // oluşturduğumuz leti içersindeki yazıyı çekmeye değiştik.
}) //olay ekledik ve olayın tipini belirttik.(change)

//2. olay ekle kısmındaki tıklamayı almak
let eklenecekler = []; //bir array oluşturduk.
const ekleButton = document.getElementById("ekle");
ekleButton.addEventListener("click", tiklama)
function tiklama(e){
    e.preventDefault(); //sayfa yenilenmesi durdurma (bir yere tıklanınca)
    eklenecekler.push({id: eklenecekler.length + 1, baslik: textInputValue});
    //inputDom = document.getElementById('yaz').value = ""; // inputu seçtik ve içine bişey girip tıklandıktan sonra silinmesini söyledik.
    inputDom.value = ""; // yukarıdakinin kısası
    displayTodos(); // tıklandığında displayi çalıştır.
}
//3 ul listeye ulaşıp yazdıklarımızı ekletme
const ulListe = document.querySelector("#ul-ekle");

let date = new Date()
let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

    let months = [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
    ]

    let days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
    ]



function displayTodos(){  // yeni fonk açtık
    if(eklenecekler.length === 0){  // liste boşsa ul için eliste boş yazdırdık
        ulListe.innerHTML = "liste boş!"
    }else{
        let result = "";  // boş string açtık 
        eklenecekler.forEach((item) => { //ekleneceklerin içinde kaç değer varsa dön (foreach). // item dönen elemanları temsil eder. //her eklenince şunu yap (result)       
        result += `                  
            <li>
            <span id="ul-ekle">${item.baslik}</span>
            <button onclick="deleteListe(${item.id})" >Sil</button>
            </li>
            ${day} ${months[month]} ${days[dayNumber]}
            `
        }
    
        )
        ulListe.innerHTML = result; // her eklediğinde listenin içersine at
    }
    }

function deleteListe(id){
    let deletedId;
    
    for(let index in eklenecekler){
        if(eklenecekler[index].id == id){
            deletedId = index;
        }

        eklenecekler.splice(deletedId, 1)
        displayTodos();
    }
}

function clearTodos(){
    eklenecekler.splice(0, eklenecekler.length);
    displayTodos();
}


displayTodos()


