const clients = [
  { name: "Acme Corp", contact: "acme@corp.com", role: "Enterprise Client" },
  { name: "Globex Inc", contact: "globex@securelytix.com", role: "Startup Client" }
];

const employees = [
  { name: "John Doe", contact: "john@securelytix.com", role: "HR Manager" },
  { name: "Jane Smith", contact: "jane@securelytix.com", role: "Developer" }
];

function populateSelect(id, data) {
  const select = document.getElementById(id);
  if (!select) return;
  select.innerHTML = `<option disabled selected>Select ${id.split('-')[0]}</option>`;
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = JSON.stringify(item);
    option.textContent = item.name;
    select.appendChild(option);
  });
}

function handleSelectChange(e) {
  const info = JSON.parse(e.target.value);
  const div = document.getElementById('details');
  div.innerHTML = `
    <p><strong>Name:</strong> ${info.name}</p>
    <p><strong>Role:</strong> ${info.role}</p>
    <p><strong>Contact:</strong> ${info.contact}</p>
  `;
}

document.getElementById('client-select')?.addEventListener('change', handleSelectChange);
document.getElementById('employee-select')?.addEventListener('change', handleSelectChange);

populateSelect('client-select', clients);
populateSelect('employee-select', employees);
