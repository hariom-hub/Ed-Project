# Ed-Project
Educational platform for a student of any age group .


                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }

                    .calendar {
                        max-width: 300px;
                        margin: 0 auto;
                        border: 1px solid #ccc;
                        padding: 10px;
                    }

                    .month {
                        text-align: center;
                        margin-bottom: 10px;
                    }

                    .prev,
                    .next {
                        cursor: pointer;
                    }

                    .weekdays {
                        display: flex;
                        justify-content: space-between;
                    }

                    .weekdays span {
                        width: calc(100% / 7);
                        text-align: center;
                        font-weight: bold;
                    }

                    .days {
                        display: grid;
                        grid-template-columns: repeat(7, 1fr);
                    }

                    .day {
                        padding: 5px;
                        text-align: center;
                        border: 1px solid #ccc;
                        cursor: pointer;
                    }

                    .selected {
                        background-color: #f0f0f0;
                    }
                </style>


                <div class="calendar">
                    <div class="present-date"></div>
                    <div class="present-day"></div>
                    <div class="present-month"></div>
                    <div class="present-year"></div>
                    <div class="month">
                        <select class="month-select">
                            <option value="0">January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">June</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
                        </select>
                        <select class="year-select"></select>
                    </div>
                    <div class="weekdays">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                    </div>
                    <div class="days"></div>
                </div>

                <script>
                    const calendar = document.querySelector('.calendar');
                    const monthSelect = calendar.querySelector('.month-select');
                    const yearSelect = calendar.querySelector('.year-select');
                    const presentDate = calendar.querySelector('.present-date');
                    const presentDay = calendar.querySelector('.present-day');
                    const presentMonth = calendar.querySelector('.present-month');
                    const presentYear = calendar.querySelector('.present-year');
                    const daysContainer = calendar.querySelector('.days');

                    let currentDate = new Date();
                    let selectedDate = null;

                    function renderCalendar() {
                        const currentMonth = monthSelect.value;
                        const currentYear = parseInt(yearSelect.value);
                        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

                        presentDate.textContent = 'Today: ' + currentDate.toDateString();
                        presentDay.textContent = 'Day: ' + currentDate.getDate();
                        presentMonth.textContent = 'Month: ' + (currentDate.getMonth() + 1);
                        presentYear.textContent = 'Year: ' + currentDate.getFullYear();

                        daysContainer.innerHTML = '';

                        for (let i = 0; i < firstDayOfMonth; i++) {
                            const emptyDay = document.createElement('div');
                            daysContainer.appendChild(emptyDay);
                        }

                        for (let i = 1; i <= daysInMonth; i++) {
                            const day = document.createElement('div');
                            day.textContent = i;
                            day.classList.add('day');
                            if (selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear) {
                                day.classList.add('selected');
                            }
                            day.addEventListener('click', () => {
                                const selectedDay = new Date(currentYear, currentMonth, i);
                                if (!selectedDate || selectedDate.getTime() !== selectedDay.getTime()) {
                                    selectedDate = selectedDay;
                                } else {
                                    selectedDate = null;
                                }
                                renderCalendar();
                            });
                            daysContainer.appendChild(day);
                        }
                    }

                    function populateYearSelect() {
                        const currentYear = new Date().getFullYear();
                        for (let i = currentYear - 10; i <= currentYear + 10; i++) {
                            const option = document.createElement('option');
                            option.textContent = i;
                            option.value = i;
                            yearSelect.appendChild(option);
                        }
                    }

                    populateYearSelect();
                    monthSelect.value = currentDate.getMonth();
                    yearSelect.value = currentDate.getFullYear();

                    renderCalendar();

                    monthSelect.addEventListener('change', renderCalendar);
                    yearSelect.addEventListener('change', renderCalendar);
                </script>
        </div>