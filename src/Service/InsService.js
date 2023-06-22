import axios from 'axios'

const EMPLOYEE_BASE_URL = 'http://localhost:8080/api/v1/employeeController/'
const MAIL_BASE_URL = 'http://localhost:8080/api/v1/mailController/'


class InsService {

    getEmployeesWithBirthdayToday(){
        return axios.get(EMPLOYEE_BASE_URL + 'birthDate/today')
    }

    sendEmail(mail) {
        return axios.post(MAIL_BASE_URL + 'sendMail', mail)
    }

    findAllEmployee() {
        return axios.get(EMPLOYEE_BASE_URL + 'all')
    }

    saveNewUser(employeeDetails) {
        console.log('SAVE USER SERVICE CALLED')
        return axios.post(EMPLOYEE_BASE_URL + 'save', employeeDetails)
    }

    // updatePlayer(jerseyNumber, player) {

    //     return axios.put(PLAYER_BASE_URL + 'update-player' + '/' + jerseyNumber, player )
    // }

    // deletePlayer(jerseyNumber) {

    //     return axios.delete(PLAYER_BASE_URL + 'delete-player' + '/' + jerseyNumber )
    // }

    // showPlayerByJerseyNumber(jerseyNumber) {

    //     return axios.get(PLAYER_BASE_URL + 'show-by-jerseyNumber' + '/' + jerseyNumber)

    // }

    // showAllPlayers(){
    //     return axios.get(PLAYER_BASE_URL + 'show-all-players')
    // }

    // // EXTRA METHODS

    // showPlayerByName(playerName) {
        
    //     return axios.get(PLAYER_BASE_URL + 'show-by-playerName' + '/' + playerName)
    // }

    // showPlayerByCountry(playerCountry) {
        
    //     return axios.get(PLAYER_BASE_URL + 'show-by-country' + '/' + playerCountry)
    // }

    // showPlayerByGreaterRuns(playerRuns) {

    //     return axios.get(PLAYER_BASE_URL + 'show-by-GreaterRuns' + '/' + playerRuns)
    // }

}

export default new InsService()