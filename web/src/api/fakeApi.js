import Mock from 'mockjs';

const Random = Mock.Random;

// 登录
Mock.mock('http://localhost:8080/fake/v1/login', 'post', option => {
  console.log(option, 'option')
  const data = {
    code: 10000,
    message: '成功',
    data: {
        username: "admin",
        password: "123456"
    }
  };
  return data
})

// 用户数据
const userData = () => {
    let users = []
    for (let i = 0; i < 10; i++) {
      let user = {
        'id': i + 1,
        'date': Random.date('yyyy-MM-dd'),
        'name': Random.cname(),
        'address': Mock.mock('@county(true)'),
        'phone': Mock.mock(/^1[0-9]{10}$/),
        'status': Random.integer(0, 1)
      }
      users.push(user)
    }
    return users
}
Mock.mock('http://localhost:8080/fake/v1/users', userData)
