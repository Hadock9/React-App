import { useState } from 'react'
import rootstyle from '../styles/root.module.css'
import { Link } from 'react-router-dom'

export function Terms() {
	return (
		<>
			<div>
                <div><h1>Політика конфіденційності Паріматч</h1></div>

                <div>
                    <p>Оператор обробляє особисті дані гравців, такі як ім’я, адреса, номер телефону та електронна адреса, а також його агенти, співробітники, партнери та субпідрядники. Ці дані збираються під час реєстрації, подачі письмового запиту або верифікації через відеозв’язок. Основна мета обробки даних – надання повного спектру послуг, включаючи створення та управління обліковим записом, відповіді на запити через службу підтримки та дотримання правил, таких як перевірка віку.</p>
                    <p>Використовуючи послуги оператора, гравець підтверджує, що ознайомлений з умовами Політики конфіденційності та погоджується з ними. Це означає, що гравець надає згоду на обробку своїх даних оператором. Оператор використовує ці дані для створення та управління обліковим записом, надання запитаних послуг, перевірки достовірності інформації та підготовки статистичних даних. У деяких випадках інформація може передаватися третім особам, наприклад, фінансовим установам і кредитним організаціям для перевірки та дотримання законодавства.</p>
                    <p>Оператор не буде надсилати непопрошені комерційні пропозиції або рекламу третіх осіб. Однак ім’я та регіон гравця можуть використовуватися в рекламних цілях. Телефонні дзвінки з відділу обслуговування клієнтів записуються для навчання та забезпечення безпеки. У разі передачі або продажу бізнесу інформація про гравця може бути передана новим власникам. Якщо гравець прагне припинити обробку своїх даних, він може звернутися до оператора, і відповідні заходи будуть прийняті. Записи верифікації зберігаються тільки на необхідний строк для досягнення цілей та вирішення можливих суперечок.</p>
                    
                    <section>
                        <ul>
                            <li>створення, експлуатація та підтримка облікового запису гравця;</li>
                            <li>надання запитаних послуг і пов’язаних з цим цілей;</li>
                            <li>перевірка достовірності інформації про гравця, включаючи передачу даних третім особам (фінансовим установам, перевірці віку та кредитним організаціям);</li>
                            <li>підготовка статистичних даних щодо використання послуг;</li>
                            <li>надання індивідуальних маркетингових матеріалів;</li>
                            <li>періодична відправка повідомлень про зміни в сервісі, технічні оновлення та правила, включаючи Політику конфіденційності;</li>
                            <li>дотримання законодавчих вимог та правових процесів для захисту інтересів спортивних або інших компетентних органів;</li>
                            <li>дослідження підозрілих, незаконних або шахрайських дій, пов’язаних з послугами;</li>
                            <li>повідомлення про злочини або підозри на злочини, включаючи відмивання грошей або шахрайство, а також виконання договірних зобов’язань перед гравцем.</li>
                        </ul>
                        
                        <p>3. Оператор не надсилає непопрошені комерційні пропозиції або рекламу третіх осіб.</p>
                        <p>4. Ім’я гравця та/або регіон можуть використовуватися в рекламних цілях.</p>
                        <p>5. Записи телефонних дзвінків в/з відділу обслуговування клієнтів зберігаються для навчання та безпеки.</p>
                        <p>6. У разі передачі або продажу бізнесу інформація про гравця може бути передана новим власникам, включаючи випадки неплатоспроможності.</p>
                        <p>7. Якщо гравець прагне припинити обробку своїх даних для вищезазначених цілей, він може звернутися до оператора, і відповідні заходи будуть прийняті.</p>
                        <p>8. Записи верифікації з використанням відеозв’язку зберігаються тільки на той строк, який необхідний для досягнення зазначених цілей та вирішення можливих суперечок.</p>

                    </section>

                    <section>
                        <h2><span ></span>Оновлення інформації про гравця<span></span></h2>
                        <p>Гравці можуть оновлювати або видаляти свої особисті дані в будь-який час через розділ “Мій обліковий запис/Деталі облікового запису” на платформі оператора, якщо така функція доступна. Це дозволяє гравцям своєчасно вносити зміни до своїх даних, забезпечуючи їх актуальність і точність.</p>
                        <p>Якщо оновити дані самостійно неможливо, гравець може звернутися до служби підтримки, яка оперативно внесе необхідні зміни в облікові дані. Це гарантує своєчасне та правильне виконання оновлень.</p>
                        <p>Така гнучкість у керуванні особистими даними є важливою частиною політики конфіденційності оператора. Вона не тільки забезпечує гравцям контроль над їх інформацією, але й допомагає підтримувати високий рівень безпеки та довіри до послуг оператора. Можливість актуалізувати дані сприяє дотриманню вимог законодавства та внутрішніх регламентів оператора.</p>
                    </section>
                </div>
                
                
                <Link to={'/Registration'}>
                <button>come back</button>
                </Link>
			</div>
		</>
	)
}
