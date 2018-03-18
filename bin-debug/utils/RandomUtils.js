/**
 * 随机数工具类
 */
var RandomUtils;
(function (RandomUtils) {
    /**
     * 获取一个区间的随机数(带小数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    function limit($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    }
    RandomUtils.limit = limit;
    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    function limitInteger($from, $end) {
        return Math.round(this.limit($from, $end));
    }
    RandomUtils.limitInteger = limitInteger;
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    function randomArray(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }
    RandomUtils.randomArray = randomArray;
})(RandomUtils || (RandomUtils = {}));
