fetchData("miscellaneous").then((result) => {
    renderText("academicTitle", result.academic_title)
    renderText("passionateAbout", result.passionate_about)
});

fetchData("biography").then((result) => {
    renderStaticContent("biography", result.value)
});

displayData("schools").then((result) => {
    renderListItems("educationList", result, {
        name: "h6",
        period: "p",
        description: "p"
    });
});

displayData("competences").then((result) => {
    renderListItems("competenceList", result, {
        value: "p"
    });
});

displayData("projects").then((result) => {
    renderListItems("projectsList", result, {
        name: "h6",
        stack: "b",
        description: "p"
    });
});

displayData("experiences").then((result) => {
    renderListItems("workExperienceList", result, {
        company_name: "h6",
        employment_type: "b",
        period: "p",
        job_description: "p"
    });
});

displayData("skills").then((result) => {
    renderListItems("skillsList", result, {
        value: "p"
    });
});

displayData("interests").then((result) => {
    renderListItems("interestsList", result, {
        value: "p"
    });
});

displayData("announcements").then((result) => {
    renderListItems("announcementsList", result, {
        value: "p"
    });
});