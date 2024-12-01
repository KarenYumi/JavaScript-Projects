<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Triângulos</title>
</head>
<body>
    <h1>Verifique o tipo de triângulo</h1>
    <form method="POST" action="">
        <label for="lado1">Lado 1:</label>
        <input type="number" id="lado1" name="lado1" step="0.01" required><br><br>
 
        <label for="lado2">Lado 2:</label>
        <input type="number" id="lado2" name="lado2" step="0.01" required><br><br>
 
        <label for="lado3">Lado 3:</label>
        <input type="number" id="lado3" name="lado3" step="0.01" required><br><br>
 
        <button type="submit">Verificar</button>
    </form>
 
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recebe os valores dos lados
        $lado1 = floatval($_POST['lado1']);
        $lado2 = floatval($_POST['lado2']);
        $lado3 = floatval($_POST['lado3']);
 
        // Verifica a condição de existência do triângulo
        if (($lado1 + $lado2 > $lado3) && ($lado1 + $lado3 > $lado2) && ($lado2 + $lado3 > $lado1)) {
            // Verifica o tipo de triângulo
            if ($lado1 == $lado2 && $lado2 == $lado3) {
                echo "<p>O triângulo é <strong>Equilátero</strong>.</p>";
                echo "<img src='./Imagens/triangulo-equilatero.jpg' alt='Triângulo Equilátero' width='200'>";
            } elseif ($lado1 == $lado2 || $lado1 == $lado3 || $lado2 == $lado3) {
                echo "<p>O triângulo é <strong>Isósceles</strong>.</p>";
                echo "<img src='./Imagens/triangulo-isosceles.jpg' alt='Triângulo Isósceles' width='200'>";
            } else {
                echo "<p>O triângulo é <strong>Escaleno</strong>.</p>";
                echo "<img src='./Imagens/triangulo-esosceles.jpg' alt='Triângulo Escaleno' width='200'>";
            }
        } else {
            echo "<p><strong>Não é possível formar um triângulo com esses lados.</strong></p>";
            echo "<h2><strong> NAO É UM TRIÂNGULO!!!!!!!!!!!!!!!!!!</strong></h2>";
        }
    }
    ?>
</body>
</html>