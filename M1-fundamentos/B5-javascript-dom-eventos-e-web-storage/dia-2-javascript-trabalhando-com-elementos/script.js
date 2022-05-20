const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
elementH1.className = 'title';
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

const elementParagraph = document.createElement('p');
elementParagraph.innerText = 'Colocando algum texto aqui';
elementSection.appendChild(elementParagraph);

const elementSection2 = document.createElement('section');
elementSection2.className = 'left-content';
elementMain.appendChild(elementSection2);

const elementSection3 = document.createElement('section');
elementSection3.className = 'right-content';
elementMain.appendChild(elementSection3);

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementSection2.appendChild(elementImg);

const elementUl = document.createElement('ul');
elementSection3.appendChild(elementUl);
const arrayList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez'];
for (let i = 0; i < arrayList.length; i += 1) {
  const elementLi = document.createElement('li');
  elementLi.innerText = arrayList[i];
  elementUl.appendChild(elementLi);
}

for (let i = 1; i < 4; i += 1){
  const elementH3 = document.createElement('h3');
  elementH3.className = 'description';
  elementH3.innerText = 'O ' + i + ' H3';
  elementMain.appendChild(elementH3);
}

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

const sectionRigthContent = document.getElementsByClassName('right-content');
sectionRigthContent.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

const removeUlChild = document.getElementsByTagName('ul')[0];
removeUlChild.remove();
removeUlChild.remove();