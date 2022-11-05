let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];

// 選取 dom
const ticketCard = document.querySelector('.ticketCard-area')
const addCardBtn = document.querySelector('.addTicket-btn');
const ticketName = document.querySelector('#ticketName')
const imgUrl = document.querySelector('#ticketImgUrl')
const area = document.querySelector('#ticketRegion')
const price = document.querySelector('#ticketPrice')
const group = document.querySelector('#ticketNum')
const rate = document.querySelector('#ticketRate')
const description = document.querySelector('#ticketDescription')
const searchResultNum = document.querySelector('#searchResult-text')

// 本次搜尋共 ? 筆資料
function searchNum(search){
  const dataNum = search.length
  let str = `本次搜尋共 ${dataNum} 筆資料`
  searchResultNum.innerHTML = str
}

// 卡片渲染
function renderCard(area) {
  let str = ''
  const filterArea = data.filter(item => {
    if (area === item.area) {
      return item;
    }
    if (!area) {
      return item
    }
  })
  filterArea.forEach(item => {
    console.log(item)
    str += `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <div class="ticketCard-num">
          <p>
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
          </p>
        </div>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">${item.price}</span>
        </p>
      </div>
    </div>
  </li>`
  })
  ticketCard.innerHTML = str
  searchNum(filterArea)
}

// 新增套票
addCardBtn.addEventListener('click', addCard);
function addCard() {
  console.log('新增套票');

  let obj = {
    id: Date.now(),
    name: ticketName.value,
    imgUrl: imgUrl.value,
    area: area.value,
    price: Number(price.value),
    group: Number(group.value),
    rate: Number(rate.value),
    description: description.value,
  }

  data.push(obj)

  const form = document.querySelector('.addTicket-form')
  form.reset();
  renderCard();

}

// 篩選
const regionSearch = document.querySelector('.regionSearch')
regionSearch.addEventListener('change', regionFilter)
function regionFilter(e) {
  const regionSelect = regionSearch.value
  console.log(regionSelect);
  renderCard(regionSelect)
}

// 執行渲染
renderCard()
searchNum(data)
