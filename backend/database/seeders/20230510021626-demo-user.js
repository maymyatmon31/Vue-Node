module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Soe Win',
      lastName: 'Htut',
      email: 'soewinhtut27@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Thet',
      lastName: 'Paing',
      email: 'thetpaing324@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Zaw',
      lastName: 'Paing',
      email: 'zawpaing35@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Htoo',
      lastName: 'Htoo',
      email: 'htoohtoo123@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Mg',
      lastName: 'Mg',
      email: 'MgMg1500@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ko',
      lastName: 'Ngal',
      email: 'kongallay123@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Aung',
      lastName: 'Aung',
      email: 'Aungaung22@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Thet',
      lastName: 'Paing',
      email: 'thetpaing@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Mya',
      lastName: 'Mya',
      email: 'myamya@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Hla',
      lastName: 'Hla',
      email: 'hlahla11@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Kyaw',
      lastName: 'Kyaw',
      email: 'kyawkyaw@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Lin',
      lastName: 'lin',
      email: 'linlin66@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pa',
      lastName: 'Pa',
      email: 'papa99@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'May',
      lastName: 'Myat',
      email: 'maymyat1234@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ko',
      lastName: 'Paing',
      email: 'kopainggyi55@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ko Soe',
      lastName: 'Htut',
      email: 'soegyi99@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};