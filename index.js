// console.log('this is array');

// if(true) {
//     console.log('this is true')
// } else {
//     console.log('this is false')
// }

// Ternary operator

// let name = 'Vlad';

// name == 'Vlad' ? console.log('numele este vlad') : console.log('numele nu este vlad');

// Array

const fruits = ['mango', 'apple', 1, 2, 3,4, 5, 6, 5, 'orange'];

//Adauga elementul la coada array-ului
// fruits.push('strawberry');

// fruits.splice(1, 0, 'strawberry')
// fruits.splice(1, 0, 'strawberry')

// fruits.pop();

// fruits.splice(1, 2);

// fruits.map((fruit, i) => {
//     if(fruit === 5) {
//         fruits.splice(i, 1);
//     }
// })


// console.log(fruits);

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

// let companiesName = [];

 for(let i=0; i < companies.length; i++) {
    // companiesName.push(companies[i].name)
  }

// let companiesNames = companies.map((company) => {
//     return company.name
// })

let companiesTest = companies.map((company) => {
    const { name, category } = company;
    return {
        // name: company.name,
        // category: company.category
        name,
        category
    }
})

// let calculateYears = companies.map((company) => {
//     return {
//         years: `Compania a tinut ${company.end - company.start} ani`
//     }
// })

// console.log(calculateYears);

// let companiesNames = companies.forEach((company, i) => {
//     let companyNameEl = document.createElement('div');
//     companyNameEl.innerHTML = company.name;
//     document.body.appendChild(companyNameEl);

//     // return company.name
// })

// let companiesNames = companies.map((company) => {
//     return company.name
// })

// let companiesNames = companies.forEach((company) => {
//     console.log(company.name)
//     return company.name
// })

// console.log(companiesNames)

// console.log(companiesNames);

// let financeCompanies = companies.filter((company)=> {
//     return company.category === "Finance" && company.start > 1990
// })

// console.log(financeCompanies);

let companiesListElement = document.getElementById('companies-list');

let createListElements = (companiesArrayList) => {
    companiesListElement.innerHTML = "";
    companiesArrayList.forEach((company) => {
        let companyElement = document.createElement('li');
        companiesListElement.appendChild(companyElement);
        companyElement.innerHTML = `Name: ${company.name} | Category: ${company.category}`
    })
}

let getFinanceCompanies = () => {
    let companiesCategory = companies.filter((company) => {
        return company.category === 'Finance'
    })
    createListElements(companiesCategory);
}


let getRetailCompanies = () => {
    let companiesCategory = companies.filter((company) => {
        return company.category === 'Retail'
    })
    createListElements(companiesCategory);
}

let getAutoCompanies = () => {
    let companiesCategory = companies.filter((company) => {
        return company.category === 'Auto'
    })
    createListElements(companiesCategory);
}

let getTechnologyCompanies = () => {
    let companiesCategory = companies.filter((company) => {
        return company.category === 'Technology'
    })
    createListElements(companiesCategory);
}

createListElements(companies);
