function generateCard(dreamTeam) {
  console.log(dreamTeam);
  return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./stylesheet.css">
        <title>The Dream Team</title>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      />
    </head>
    <body>
        <div class="header">
            <h1 class="title"><h1>
        </div>
        <div class="card-container ">
            <div class="job-section">
                ${getManagerCards(
                  dreamTeam.filter(
                    (Employee) => Employee.getRole() == 'Manager'
                  )
                )}
            </div>
            <div class="job-section">
                ${getEngineerCards(
                  dreamTeam.filter(
                    (Employee) => Employee.getRole() == 'Engineer'
                  )
                )}
            </div>
            <div class="job-section">
                ${getInternCards(
                  dreamTeam.filter((Employee) => Employee.getRole() == 'Intern')
                )}
            </div>        
        </div>
    </body>
    </html>
    `;
  function getManagerCards(managers) {
    let managerCards = ``;
    for (let i = 0; i < managers.length; i++) {
      managerCards =
        managerCards +
        `
            <div class="job-card">
                <div class="job-card-header manager">
                    <h2>${managers[i].name}</h2>
                    <h2><span class="material-icons inline-icon">coffee</span> Manager</h2>
                </div>
                <div class="job-card-body">
                    <ul class="list-group-item">ID: ${managers[i].id}</p>
                    <li class="list-group-item">Email:</li>
                    <a href="mailto: ${managers[i].email}"</a>
                    <li class="list-group-item">Office Number:</li>
                    <li class="list-group-item">${managers[i].officeNumber}</li> 
                </div>
            </div>
            `;
    }
    return managerCards;
  }

  function getEngineerCards(engineers) {
    let engineerCards = ``;
    for (let i = 0; i < engineers.length; i++) {
      engineerCards =
        engineerCards +
        `
            <div class="job-card">
                <div class="job-card-header engineer">
                    <h2>${engineers[i].name}</h2>
                    <h2><span class="material-icons inline-icon">engineering</span> Engineer</h2>
                </div>
                <div class="job-card-body">
                    <ul class="list-group-item">ID: ${engineers[i].id}</ul>
                    <li class="list-group-item">Email:</li>
                    <a href="mailto: ${engineers[i].email}"</a>
                    <li class="list-group-item">GitHub:</li> 
                    <a href="https://github.com/${engineers[i].github}" class="list-group-item">${engineers[i].github}</a>
                </div>
            </div>
            `;
    }
    return engineerCards;
  }

  function getInternCards(interns) {
    let internCards = ``;
    for (let i = 0; i < interns.length; i++) {
      internCards =
        internCards +
        `
            <div class="job-card">
                <div class="job-card-header intern">
                    <h2>${interns[i].name}</h2>
                    <h2><span class="material-icons inline-icon">school</span> Intern</h2>
                </div>
                <div class="job-card-body">
                    <ul class='list-group'>
                    <li class="list-group-item">ID: ${interns[i].id}</li>
                    <li class="list-group-item">Email:</li>
                    <a href="mailto: ${interns[i].email}"</a>
                    <li class="list-group-item">School:</li> 
                    <li class="list-group-item">${interns[i].school}</li>
                </div>
            </div>
            `;
    }
    return internCards;
  }
}
module.exports = generateCard;
