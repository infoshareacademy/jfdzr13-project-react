# Witajcie na zajęciach poświęconych Google Firebase

## Przez kolejne dwa dni spróbujemy odtworzyć następujący projekt krok po kroku:

![](./project.gif)

### Zadania:

1. stwórz nowy projekt React + JavaScript przy pomocy:

```javascript
    # npm
    npm create vite@latest
```

lub

```javascript
    # yarn
    yarn create vite
```

2. stwórz nowy projekt w Firebase:

-  wejdź na stronę https://firebase.google.com/
-  stwórz nowy projekt (bez google analytics)
-  stwórz nową aplikację web (bez hostingu firebase)
-  dodaj Firebase SDK do projektu react `npm install firebase`
-  skopiuj kod potrzebny do inicjalizacji aplikacji
-  pod ściezką `/src` stwórz nowy folder `/config` a w nim plik `firebase.js`, do którego wkleisz wcześniej skopiowany skrypt

3. dodaj metody identyfikacji uzytkownika przez email/password i google w firebase

-  dodatkowo mozesz stworzyć testowego uzytkownika `eg. test@test.pl / testpwd123`

4. stwórz bazę danych w firestore (production mode)

-  stwórz w niej trzy kolekcje `classes`, `students` i `teachers` przechowujące dane zawarte w pliku `data.js`

5. Dodaj `react-router-dom` do projektu i skonfiguruj browser router.

-  w App.jsx nalezy zdefiniować następujące ściezki:

   -  publiczne:
      -  `/` -> `Layout.jsx` ,
      -  `login` -> `Login.jsx`,
      -  `signup` -> `SignUp.jsx`
   -  prywatne (dostępne tylko dla zalogowanych):
      -  `/` -> `Home.jsx`
      -  `/students` -> `Students.jsx`
         -  `:id` -> `Student.jsx`
      -  `/classes` -> `Classes.jsx`
         -  `:id` -> `Class.jsx`
      -  `/teachers` -> `Teachers.jsx`

-  stwórz pliki i foldery odpowiadające powyzszym ściezkom

6. Stwórz `AuthProvider` przy uzyciu context api.

   -  context powinien zwracać następujące dane:
      -  currentUser,
      -  signup (funkcja umozliwiająca rejestrację)
      -  login (funkcja umozliwiająca logowanie)
      -  loginWithGoogle (funkcja umozliwiająca logowanie przy uzyciu GoogleAuthProvider)
      -  logout (funkcja umozliwiająca wylogowywanie uzytkownika)

7. Stwórz komponent `PrivateRoute`, który przekieruje uzytkownika do strony logowania, jeśli nie jest zalogowany, lub pozwoli wejść pod zadany adres, gdy jest zalogowany.

   -  Przykład:
      -  wchodzę pod adres http://localhost:5173/students ale nie jestem zalogowany
      -  aplikacja przekierowuje mnie pod http://localhost:5173/login
      -  po zalogowaniu otrzymuję dostęp do aplikacji

8. Stwórz komponent `NavigationMenu`:

   -  komponent powinien wyświetlać linki do publicznych podstron dla niezalogowanego uzytkownika
   -  dla zalogowanych uzytkowników komponent powinien wyświetlać linki do prywatnych podstron oraz przycisk do wylogowywania

9. Stwórz komponent Layout.

   -  komponent ma wyświetlać NavigationMenu na kazdej podstronie
   -  pod NavigationMenu wyświetlana jest treść strony `<Outlet>`
   -  pod treścią strony wyświetlany jest footer

10.   Stwórz komponent `Login.jsx` zawierający funkcjonalność logowania przy pomocy mejla i hasła oraz przy pomocy google providera

11.   Stwórz komponent `SignUp.jsx` umozliwiający rejestrację uzytkownika

12.   Stwórz komponent Classes.

-  po zassaniu danych z firestore komponent zwraca nienumerowaną listę klas, np w postaci kafelków,
-  kazdy kafelek jest linkiem do podstrony klasy

13.   Stwórz komponent Class.

-  kazda klasa przedstawia informacje na temat:
   -  liczby uczniów w klasie,
   -  imiona i nazwiska uczniów

14. Stwórz komponent Students

-  po zassadniu danych z firestore komponent zwraca nienumerowaną listę linków,
-  kazdy link jest kafelkiem przedstawiającym imię i nazwisko a takze klasę, do której uczęszcza uczeń,
-  kazdy link przenosi na podstronę danego studenta

15. Stwórz komponent Student

-  komponent przedstawia informacje o imieniu, nazwisko i klasie, do której uczęszcza uczeń, a takze,
-  listę przedmiotów i ocen otrzymanych przez ucznia

16. Stwórz komponent Teachers:

-  komponent przedstawia w postaci np kafelków informacje o imionach i nazwiskach nauczycieli a takze informację jaką klasą opiekuje się kazdy z nich,
-  nadto kafelki nauczycieli zawierają linki do podstron ich klas
