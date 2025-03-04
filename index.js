let userInputE1 = document.getElementById("searchInput");
let searchResultsContainer = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendTheResult(data) {

    let {
        title,
        link,
        description
    } = data;

    let resultContainer = document.createElement("div");
    resultContainer.classList.add("m-3");
    resultContainer.classList.add("result-item");
    searchResultsContainer.appendChild(resultContainer);

    let titleE1 = document.createElement("a");
    titleE1.href = link;
    titleE1.target = "_blank";
    titleE1.textContent = title;
    titleE1.classList.add("result-title");
    resultContainer.appendChild(titleE1);

    let breakE1 = document.createElement("br");
    resultContainer.appendChild(breakE1);

    let linkE1 = document.createElement("a");
    linkE1.href = link;
    linkE1.target = '_blank';
    linkE1.textContent = link;
    linkE1.classList.add("result-url");
    resultContainer.appendChild(linkE1);

    let breakE2 = document.createElement("br");
    resultContainer.appendChild(breakE2);

    let descriptionE1 = document.createElement("p");
    descriptionE1.textContent = description;
    descriptionE1.classList.add("link-description");
    resultContainer.appendChild(descriptionE1);
}


function displaySearchResults(searchResults) {
    spinnerE1.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendTheResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.remove("d-none");
        let userValue = userInputE1.value;
        searchResultsContainer.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + userValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                //spinnerE1.classList.add("d-none");
                let {
                    search_results
                } = jsonData;
                console.log(search_results);
                displaySearchResults(search_results);
            })
    }
}

userInputE1.addEventListener("keydown", searchWikipedia);
