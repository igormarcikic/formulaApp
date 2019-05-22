var app;
(function (app) {
    var teams;
    (function (teams) {
        var Teams = /** @class */ (function () {
            function Teams(round, grandPrix, driver1, driver2, points) {
                this.round = round;
                this.grandPrix = grandPrix;
                this.driver1 = driver1;
                this.driver2 = driver2;
                this.points = points;
            }
            return Teams;
        }());
        teams.Teams = Teams;
    })(teams = app.teams || (app.teams = {}));
})(app || (app = {}));
