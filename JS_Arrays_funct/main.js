const companies = [
    { name:"Company One", category:"Finance", start:1981, end: 2003},
    { name:"Company Two", category:"Retail", start:1992, end: 2008},
    { name:"Company Three", category:"Auto", start:1999, end: 2007},
    { name:"Company Four", category:"Retail", start:1989, end: 2010},
    { name:"Company Five", category:"Technology", start:2009, end: 2014},
    { name:"Company Six", category:"Finance", start:1987, end: 2010},
    { name:"Company Seven", category:"Auto", start:1986, end: 1996},
    { name:"Company Eight", category:"Technology", start:2011, end: 2016},
    { name:"Company Nine", category:"Retail", start:1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Regular for loop

        // for (let i = 0; i<companies.length; i++){
        //     console.log(companies[i])
        // }

//forEach

        // companies.forEach((company)=>{
        //     console.log(company.start);
        // })

//filter
//to filter ages array older than 21

        // let canDrink = [];
        // for (let i = 0; i < ages.length; i++){
        //     if(ages[i]>= 21){
        //         canDrink.push(ages[i]);
        //     }
        // }
        // console.log(canDrink)

        // const canDrink = ages.filter((age)=>{
        //     if(age>=21){
        //         return true;
        //     }
        // });
        // console.log(canDrink);

        // const canDrink = ages.filter(age => age>=21);
        // console.log(canDrink);

//Filter retail companies

        // const categories = companies.filter((company)=>{
        //     if(company.category==='Retail'){
        //         return true
        //     };
        // })
        // console.log(categories);

        // const categories = companies.filter(company => company.category==='Retail');
        // console.log(categories);

// Get 80's company

        // const eightiesCompany  = companies.filter(company => (company.start>= 1980 && company.start <= 1990));
        // console.log(eightiesCompany);

// Get Company lasted 10 years or more

        // const longLastedCompany = companies.filter(company => ((company.end - company.start)>=10));
        // console.log(longLastedCompany);

//map

        // const companyNames = companies.map(company => company.name);
        // console.log(companyNames);

        // const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
        // console.log(companyNames);

// Ages to square and square root

        // const agesMap = ages
        // .map(age=>Math.sqrt(age))
        // .map(age=>age*2);
        // console.log(agesMap)

//sort
//Sort company by start year
        // const sortedCompany = companies.sort((c1, c2)=>{
        //     if(c1.start > c2.start){
        //         return 1;
        //     } else {
        //         return -1;
        //     }
        // })
        // console.log(sortedCompany);

        // const sortedCompany = companies.sort((a, b) => a.start > b.start ? 1 : -1);
        // console.log(sortedCompany);

//Sort ages (ascending a-b && descending b-a)
        // const sortAges = ages.sort((a, b)=> b - a);
        // console.log(sortAges);

//reduce

        // let agesSum = 0;

        // for(let i = 0; i < ages.length; i++){
        //     agesSum += ages[i];
        // }
        // console.log(agesSum);

        // const agesSum = ages.reduce((total, age)=> total + age, 0);
        // console.log(agesSum);

        // const agesSum = ages.reduce((total, age)=>{
        //     return total + age;
        // }, 0);

        // console.log(agesSum);

// Get company total years

        // const totalYears = companies.reduce((total, comapany)=> total + (comapany.end - comapany.start), 0);
        // console.log(totalYears);