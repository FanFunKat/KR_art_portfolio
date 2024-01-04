# KR_art_portfolio = PhotoToTo
Strona internetowa dla studia fotograficznego.
Strona na bazie warsztatów z bootcamp Frontend Info Share Akademy.
Kolejne etapy tworzenia strony opisano poniżej.

## 1. Landing page

Tzw. _landing page_ to najczęściej pierwsze co widzimy wchodząc na daną stronę internetową. 
Co taka strona powinna zawierać?
- [ ] Tytuł 
  widoczny na karcie przeglądarki

- [ ] Ikonę - favicon
  widoczną na karcie przeglądarki

- [ ] Nagłówek
  przyklejony do góry strony, zawierający:

  - [ ] logo
    może to być też ta sama ikona co na karcie przeglądarki oraz nazwa firmy lub projektu

  - [ ] linki
    służące do szybkiej nawigacji po stronie, możecie je dodać na koniec lub podczas tworzenia nowych sekcji

- [ ] Krótką zachętę do pozostania na stronie
  Często sprowadza się to do sloganu lub jednej, zwykłej frazy podsumowującej, czym zajmuje się dana firma lub czego dotyczy projekt.
  Dodatkowym elementem estetycznym może być zdjęcie lub symboliczna grafika znajdująca się obok.

- [ ] Ogólne informacje mówiące o tym, co możemy zaoferować
  W naszym przypadku będzie to siatka zdjęć z portfolio.

- [ ] Cennik
  Czyli jedna z kluczowych informacji dla odwiedzającego.

## 2. Informacje o zdjęciu

Po kliknięciu zdjęcia powinna pojawić się karta produktu zawierająca podstawowe informacje:
- tytuł
- tagi
- lokalizacja
- przycisk zamknięcia karty (po kliknięciu powinna zniknąć)
- przycisk zakupu

Karta powinna zniknąć po wciśnięciu `esc`.

Po kliknięciu przycisku _Kup_ powinien zostać wyświetlony komunikat o wystąpieniu problemu podczas dokonywania zakupu.

## 3. Dodanie produktu do koszyka

Okienko podglądu zdjęcia powinno zostać zmodyfikowane, by zawierało formularz z:
- niemodyfikowalnym tytułem (nazwą produktu),
- niemodyfikowalną wartością produktu (np. $10),
- przyciskiem dodania do koszyka.

Po kliknięciu przycisku dodania do koszyka podstawowe informacje o zdjęciu wraz z ceną powinny zostać zapisane w [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## 4. Złożenie zamówienia

W menu głównym powinien znaleźć się nowy przycisk, który wyświetli produkty dodane wcześniej do koszyka (korzystając ze [Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)).

Po kliknięciu powinno pojawić się okienko w sposób analogiczny do podglądu produktu, a w nim:
- lista zamawianych zdjęć zawierająca:
  - miniaturki,
  - tytuły,
  - ceny,
- kwotę do zapłaty,
- przycisk dokonania zakupu.

Po kliknięciu przycisku zakupu, informacje o koszyku powinny zostać usunięte.

## 5. Rabat

Zanim użytkownik opuści stronę, będziemy chcieli go zatrzymać, przyznając rabat.

W tym calu wyświetlmy informację o ograniczonej czasowo ofercie.

Rabat powinien zostać przyznany natychmiast, ale wygasnąć po upływie np. 1 minuty.
Poinformujmy o tym użytkownika, dodając tykający zegar do powiadomienia.

Notyfikacja z informacją o rabacie powinna zostać zamknięta automatycznie po upływie 10 sekund, jeśli użytkownik nie zrobi tego wcześniej samodzielnie. 

---

**Wskazówka**

W celu wyświetlenia informacji o przyznanym rabacie:
1. nasłuchuj na zdarzenie [mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) na całym oknie (`window`)

   lub

2. ustaw licznik odmierzający czas, po którym notyfikacja zostanie wyświetlona. 

Informację o rabacie przechowaj w [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).


---

Jeśli użytkownik zdąży otworzyć koszyk w wyznaczonym czasie, rabat powinien zostać uwzględniony.

## 6. Pobieranie treści

Widok portfolio powinien zawierać dynamiczne zdjęcia, których listę otrzymujemy w odpowiedzi serwera.

Do wykonania zadania niezbędne będzie [zainstalowanie `json-server`](https://github.com/typicode/json-server#getting-started) i uruchomienie go z bazą danych w pliku `db.json` zawierającym [przykładowy zestaw zdjęć](https://picsum.photos).

Przykładowe uruchomienie serwera:
```shell
json-server db.json
```

Przykładowe zapytanie HTTP:
```http request
GET http://localhost:3000/photos
```

## 7. Złożenie zamówienia

Korzystając z formularza utworzonego w zadaniu [Formularze i Storage API – Złożenie zamówienia](../forms-and-storage/README.md#złożenie-zamówienia), wyślij zamówienie do serwera po kliknięciu przycisku zakupu.

W tym celu tworzona została pusta kolekcja `orders` w pliku [`db.json`](../db.json).

Przykładowe zapytanie HTTP:
```http request
POST http://localhost:3000/orders
Content-Type: application/json

{
  "items": [{
    "id": "10"
  }, {
    "id": "12",
    "discount": 0.1
  }]
}
```
