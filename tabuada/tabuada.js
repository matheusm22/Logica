/**
 * - Tabuada completa
 * @author Matheus Motta
 */

for (let i = 1; i < 11; i++) {
    document.write("<p>Tabuada do " + i + "</p>")
    for (let j = 1; j < 11; j++) {
        document.write(i + " x " + j + " = " + (i * j) + "<br>")
    }
}