const Mock = require('mockjs');
var data = Mock.mock(/\.json/,{
    'list|7': [{
        "order_no": '@guid()',
        "timestamp": +Mock.Random.date('T'),
        "username": '@name()',
        "price": '@float(1000, 15000, 0, 2)',
        'status|1': ['success', 'pending']
    }]
})







