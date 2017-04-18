System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.title = 'Voter';
                    this.voteCount = 10;
                    this.baseVote = this.voteCount;
                }
                VoterComponent.prototype.onVoteUp = function () {
                    if (this.voteCount == this.baseVote || this.voteCount == this.baseVote - 1)
                        this.voteCount += 1;
                };
                VoterComponent.prototype.onVoteDown = function () {
                    if (this.voteCount == this.baseVote || this.voteCount == this.baseVote + 1)
                        this.voteCount -= 1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n        <div class='vote'>\n            <i class='glyphicon glyphicon-menu-up' \n               (click)='onVoteUp()'\n               [class.orange]='vote > baseVote'>\n            </i>\n            <span>{{vote}}</span>\n            <i class='glyphicon glyphicon-menu-down' \n               (click)='onVoteDown()'\n               [class.orange]='vote < baseVote'>\n            </i>\n        </div>\n    ",
                        styles: ["\n        .vote {\n            font-size: 25px;\n            width: 20px;\n        }\n        .glyphicon {\n            cursor: hand;\n        }\n        .orange {\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map