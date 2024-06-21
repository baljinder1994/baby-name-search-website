const names = [
    { name: 'Aarav', gender: 'boy' },
    { name: 'Vivaan', gender: 'boy' },
    { name: 'Aditya', gender: 'boy' },
    { name: 'Aanya', gender: 'girl' },
    { name: 'Diya', gender: 'girl' },
    { name: 'Saanvi', gender: 'girl' },
    // Add more names here...
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const genderSelect = document.getElementById('gender-select');
    const namesList = document.getElementById('names-list');

    const heroSearchInput = document.getElementById('hero-search-input');
    const heroGenderSelect = document.getElementById('hero-gender-select');

    const filterNames = () => {
        const searchValue = searchInput.value.toLowerCase() || heroSearchInput.value.toLowerCase();
        const genderValue = genderSelect.value || heroGenderSelect.value;

        const filteredNames = names.filter(({ name, gender }) => {
            const isGenderMatch = genderValue === 'all' || genderValue === gender;
            const isNameMatch = name.toLowerCase().includes(searchValue);
            return isGenderMatch && isNameMatch;
        });

        renderNames(filteredNames);
    };

    const renderNames = (names) => {
        namesList.innerHTML = '';
        names.forEach(({ name }) => {
            const nameItem = document.createElement('div');
            nameItem.className = 'name-item';
            nameItem.textContent = name;
            namesList.appendChild(nameItem);
        });
    };

    searchInput.addEventListener('input', filterNames);
    genderSelect.addEventListener('change', filterNames);
    heroSearchInput.addEventListener('input', filterNames);
    heroGenderSelect.addEventListener('change', filterNames);

    // Initial rendering
    renderNames(names);
});
