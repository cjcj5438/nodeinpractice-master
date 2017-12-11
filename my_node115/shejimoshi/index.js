/*建造者模式*/
//创建一位人类
var Human = function (param) {
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密'
};
//类人的原始方法
Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
};
//实例化职位类
var Named = function (name) {
    var that = this;
    (function (name, that) {
        that.wholeName = name;
        if (name.indexOf(' ') > -1) {
            that.FirstName = name.slice(0, name.indexOf(' '));
            this.LastName = name.slice(name.indexOf(' '));
        }
    })(name, that)
};
//实例话职位类
var work = function (work) {
    var that = this;
    (function (work, that) {
        switch (work) {
            case 'code':
                that.work = '工程师';
                break;
            case 'UI':
                that.work = '设计师';
                break;
            case 'teach':
                that.work = '教师';
                break;
            default:
                that.work = work;
        }
    })(work,that)
};
// 更换期望的职位
Work.prototype.changeWork = function(work) {
    this.work = work;
};
// 应聘者创建类
var Person = function(name, work) {
    // 创建应聘者缓存对象
    var _person = new Human();
    // 创建应聘者姓名解析对象
    _person.name = new Named(name);
    // 创建应聘者期望职位
    _person.work = new Work(work);
    // 返回创建的应聘者对象
    return _person;
}
