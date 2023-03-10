export default function JobChoose(props) {
    return(<select onChange={(e) => {props.update(e.target.value)}}>
        <option value="">Выберите профессию</option>
        <option value="developer">Front-end разработчик</option>
        <option value="designer">Дизайнер</option>
        <option value="backend">Back-end разработчик</option>
        <option value="devops">Dev-ops</option>
        <option value="QA">Тестировщик</option>
    </select>)
}