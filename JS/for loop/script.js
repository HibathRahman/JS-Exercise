let company = ["DLF" , "ACCENTURE" , "CAPGIMINI" , "TVS"];

for(i=0 ; i < company.length; i++){
    console.log(company[i]);
}


for(i=0 ; i < company.length; i++){
    if( 1===i){
        continue;
    }
    console.log(company[i]);
}


for(i=0 ; i < company.length; i++){
    if( 1===i){
            break;
    }
    console.log(company[i]);
}

