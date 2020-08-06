# Prima
Repository for the module "Prototyping interactive media-applications and games" at Furtwangen University

[Pages-Version](https://neluxx.github.io/Prima_FinalTask/)

[Start the Game](https://neluxx.github.io/Prima_FinalTask/Index)


## Checkliste für Leistungsnachweis
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 | Knightmare
|    | Name                  | Alissa Usta, Fabian Arndt
|    | Matrikelnummer        | 258242, 257125
|  1 | Nutzerinteraktion     | Der Spieler kann sich mit den Pfeiltasten sowie A und D nach Links und Rechts bewegen. Mit der Pfeiltaste nach oben oder W wir gesprungen. Mit der Pfeiltaste nach unten oder S kann man Blocken und somit eingehenden Schaden verhindern. Mit der Leertaste greift man die Gegner an. |
|  2 | Objektinteraktion     | Es gibt zwei Arten von Kollisionen. Die Objektkollision die dafür sorgt das man auf Plattformen stehen kann und nicht herunterfällt sowie die Gegner-/ Spielerkollision welche für das Kampfsystem und dem Verteilen von Schaden benutzt wird. |
|  3 | Objektanzahl variabel | Zu Beginn des Spieles werden zufällig viele Gegner der verschiedenen Typen an immer unterschiedlichen Orten gespawnt damit das Spielerlebnis spannend bleibt. |
|  4 | Szenenhierarchie      | Die Szenenhierarchie besteht aus einer Root-Node. Kinder dieser Node sind z.B. das Level, der Spieler oder die Gegner. Das Level und die Gegener bestehen wiederum aus mehreren Kindern welche die einzelnen Elemente des Levels oder die einzelnen Gegner sind. |
|  5 | Sound                 | Es gibt verschiedene Musikstücke die z.B. während dem Spiel, bei einem Game Over oder wenn das Spiel geschafft wurde abgespielt werden. Außerdem gibt es für fast alle Interaktionen Soundeffekte. Diese sind Laufen, Springen, Blocken, Angreifen, Schaden nehmen sowie Sterben. |
|  6 | GUI                   | Im Hauptmenü hat der Nutzer die Möglichkeit die Lautstärke der Musik und der Soundeffekte anzupassen. |
|  7 | Externe Daten         | In einer JSON-Datei kann man alle Werte des Spielers und der verschiedenen Gegnertypem verändern. Diese Werte sind Leben, Stärke, Angriffsgeschwindigkeit und Bewegungsgeschwindigkeit. |
|  8 | Verhaltensklassen     | Fast alle Mechaniken wurden ausgelagert für die Übersichtlichkeit des Codes. |
|  9 | Subklassen            | Es gibt eine Character Klasse welche sich in Player und Enemy unterteilt. Enemy unterteilt sich noch einmal in die verschiedenen Gegnertypen. Umso tiefer man geht umso spezifischer sind die Klassen auf den bestimmten Typ angepasst. Element ist ein Kind der Level Klasse. Das Level besteht aus mehreren Elementen. |
| 10 | Maße & Positionen     | Der Ursprung der Welt hat die Koordinaten (0, 0) von denen man sich hauptsächlich nach rechts in den positiven Bereich bewegt. Die Maße liegen hauptsächlich im einstelligen Bereich und sind aufeinander abgestimmt um zu große Zahlen zu vermeiden. |
| 11 | Event-System          | Alle Interaktionen der Tastatur werden über einen EventListener in einem InputHandler abgefangen und verarbeitet. Außerdem gibt es Loop Events welche wiederkehrende Aktionen ermöglichen. |

## Abgabeformat
* Fasse die Konzeption als ein wohlformatiertes Designdokument in PDF zusammen!
* Platziere einen Link in der Readme-Datei deines PRIMA-Repositories auf Github auf die fertige und in Github-Pages lauffähige Anwendung.
* Platziere ebenso Links zu den Stellen in deinem Repository, an denen der Quellcode und das Designdokument zu finden sind.
* Stelle zudem auf diese Art dort auch ein gepacktes Archiv zur Verfügung, welches folgende Daten enthält
  * Das Designdokument 
  * Die Projektordner inklusive aller erforderlichen Dateien, also auch Bild- und Audiodaten
  * Eine kurze Anleitung zur Installation der Anwendung unter Berücksichtigung erforderlicher Dienste (z.B. Heroku, MongoDB etc.) 
  * Eine kurze Anleitung zur Interaktion mit der Anwendung

## GameZone
Wenn Du dein Spiel bei der Dauerausstellung "GameZone" am Tag der Medien sehen möchtest, ergänze folgendes  
* Einen Ordner mit zwei Screenshots der laufenden Applikation in den Größen 250x100 und 1920x400 pixel sowie ein Textdokument mit den Informationen:
* Titel
* Autor
* Jahr und Semester der Entwicklung (Sose, Wise)
* Studiensemester
* Lehrplansemester
* Studiengang
* Veranstaltung im Rahmen derer die Entwicklung durchgeführt wurde
* betreuender Dozent
* Genre des Spiels
* ggf. passende Tags/ Schlagwörter zu dem Spiel
* Untertitel (max 40 Zeichen), der Menschen zum Spielen animiert
* Kurzbeschreibung (max 250 Zeichen), die kurz erklärt wie zu spielen ist
* Erklärung, dass die Fakultät Digitale Medien die Anwendung bei Veranstaltungen, insbesondere am Tag der Medien, mit einem expliziten Verweis auf den Autor, vorführen darf.
