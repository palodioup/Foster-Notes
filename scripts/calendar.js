function createCalendar(year, month) {
  const calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = "";

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  daysOfWeek.forEach((day) => {
    const th = document.createElement("th");
    th.innerText = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const firstDay = new Date(year, month).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let currentDay = 1;
  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("td");
    row.appendChild(emptyCell);
  }

  while (currentDay <= lastDate) {
    if (row.children.length === 7) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
    const cell = document.createElement("td");
    cell.innerText = currentDay;
    row.appendChild(cell);
    currentDay++;
  }

  while (row.children.length < 7) {
    const emptyCell = document.createElement("td");
    row.appendChild(emptyCell);
  }

  table.appendChild(row);
  calendarDiv.appendChild(table);
}

const today = new Date();
createCalendar(today.getFullYear(), today.getMonth());
