import { SCalendarNav, SCalendarMonth, SNavActions, SNavAction, SNavActionSvg, SCalendarContent, SCalendarDaysNames, SCalendarDayName, SCalendarDayNameEnd, SCalendarCells, SCalendarCellOtherMonth, SCalendarCellCellDay, SCalendarCellCellDayWeekend, SCalendarCellCellDayCurrent, SCalendarCellOtherMonthWeekend, SCalendarCellCellDayWeekendActive } from "./calendar.styled";

const Calendar = () => {
    return (
        <>
            <SCalendarNav>
                <SCalendarMonth>Сентябрь 2023</SCalendarMonth>
                <SNavActions>
                    <SNavAction data-action="prev">
                        <SNavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                            <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </SNavActionSvg>
                    </SNavAction>
                    <SNavAction data-action="next">
                        <SNavActionSvg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                            <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </SNavActionSvg>
                    </SNavAction>
                </SNavActions>
            </SCalendarNav>
            <SCalendarContent>
                <SCalendarDaysNames>
                    <SCalendarDayName>пн</SCalendarDayName>
                    <SCalendarDayName>вт</SCalendarDayName>
                    <SCalendarDayName>ср</SCalendarDayName>
                    <SCalendarDayName>чт</SCalendarDayName>
                    <SCalendarDayName>пт</SCalendarDayName>
                    <SCalendarDayNameEnd>сб</SCalendarDayNameEnd>
                    <SCalendarDayNameEnd>вс</SCalendarDayNameEnd>
                </SCalendarDaysNames>
                <SCalendarCells>
                    <SCalendarCellOtherMonth>28</SCalendarCellOtherMonth>
                    <SCalendarCellOtherMonth>29</SCalendarCellOtherMonth>
                    <SCalendarCellOtherMonth>30</SCalendarCellOtherMonth>
                    <SCalendarCellCellDay>31</SCalendarCellCellDay>
                    <SCalendarCellCellDay>1</SCalendarCellCellDay>
                    <SCalendarCellCellDayWeekend>2</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDayWeekend>3</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDay>4</SCalendarCellCellDay>
                    <SCalendarCellCellDay>5</SCalendarCellCellDay>
                    <SCalendarCellCellDay>6</SCalendarCellCellDay>
                    <SCalendarCellCellDay>7</SCalendarCellCellDay>
                    <SCalendarCellCellDayCurrent>8</SCalendarCellCellDayCurrent>
                    <SCalendarCellCellDayWeekend>9</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDayWeekend>10</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDay>11</SCalendarCellCellDay>
                    <SCalendarCellCellDay>12</SCalendarCellCellDay>
                    <SCalendarCellCellDay>13</SCalendarCellCellDay>
                    <SCalendarCellCellDay>14</SCalendarCellCellDay>
                    <SCalendarCellCellDay>15</SCalendarCellCellDay>
                    <SCalendarCellCellDayWeekend>16</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDayWeekend>17</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDay>18</SCalendarCellCellDay>
                    <SCalendarCellCellDay>19</SCalendarCellCellDay>
                    <SCalendarCellCellDay>20</SCalendarCellCellDay>
                    <SCalendarCellCellDay>21</SCalendarCellCellDay>
                    <SCalendarCellCellDay>22</SCalendarCellCellDay>
                    <SCalendarCellCellDayWeekend>23</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDayWeekend>24</SCalendarCellCellDayWeekend>
                    <SCalendarCellCellDay>25</SCalendarCellCellDay>
                    <SCalendarCellCellDay>26</SCalendarCellCellDay>
                    <SCalendarCellCellDay>27</SCalendarCellCellDay>
                    <SCalendarCellCellDay>28</SCalendarCellCellDay>
                    <SCalendarCellCellDay>29</SCalendarCellCellDay>
                    <SCalendarCellCellDayWeekend>30</SCalendarCellCellDayWeekend>
                    <SCalendarCellOtherMonthWeekend>1</SCalendarCellOtherMonthWeekend>
                </SCalendarCells>
            </SCalendarContent>
      </>     
    )
}

export default Calendar;