angular.module("meuModulo", [])
.controller("indexController", function ($scope) {
    $scope.titulo = "Sistema com Angular JS";
    $scope.alunos = [
        { nome: "Camila", email: "camila@mail.com", nota1: 65, nota2: 80, nota3: 55 },
        { nome: "Pedro", email: "pedro@mail.com", nota1: 70, nota2: 60, nota3: 95 },
        { nome: "Murilo", email: "murilo@mail.com", nota1: 95, nota2: 100, nota3: 95 },
        { nome: "Joao", email: "joao@mail.com", nota1: 85, nota2: 95, nota3: 75 },
        { nome: "Marcelo", email: "marcelo@mail.com", nota1: 75, nota2: 80, nota3: 75 },
        { nome: "Ana", email: "ana@mail.com", nota1: 35, nota2: 90, nota3: 85 },
    ]



    var init = function () {
        $scope.alunos.forEach(function (aluno) {
            aluno.media = media(aluno);
        });
        limpaForm();
    };

    var media = function (Aluno) {
        var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
        return media.toFixed(2);
    };

    $scope.editando = false;
    var alunoEditar;

    $scope.editarAluno = function (Aluno) {
        $scope.editando = true;
        angular.copy(Aluno, $scope.Aluno);
        $('#modal1').modal('open');
        alunoEditar = Aluno;
    };

    $scope.salvarAluno = function (Aluno) {
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno);
        $('#modal1').modal('close');
    }

    $scope.abreAddAluno = function () {
        $scope.editando = false;
        limpaForm();


    }



    $scope.addAluno = function (Aluno) {
        Aluno.media = media(Aluno);
        $scope.alunos.push(Aluno);
        $('#modal1').modal('close');
        limpaForm()
    };

    $scope.deletarAluno = function (Aluno) {
        for (var index in $scope.alunos) {
            var aux = $scope.alunos[index];
            if (Aluno === aux) {
                $scope.alunos.splice(index, 1)
            }
        }
    }

    var limpaForm = function () {
        $scope.Aluno = { nome: "", email: "", nota1: '', nota2: '', nota3: ' ', media: ' ' };
    }

    init();
})