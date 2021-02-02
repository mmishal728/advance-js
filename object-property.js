const student= [ 

    {id: 21, name : 'omar sunny '},
    {id: 26, name : 'jashim uddin '},
    {id: 23, name : 'alamgir'},
    {id: 25, name : 'sabana kala '},
    {id: 22, name : ' mahia mahi '},
    {id: 11, name : ' kalia '},
    {id: 31, name : ' chuliya '}


 ];
 const name = student.map(s=> s.name);
 const ids = student.map(s=> s.id);
 const bigger = student.filter(s=> s.id > 23);
 console.log( bigger);