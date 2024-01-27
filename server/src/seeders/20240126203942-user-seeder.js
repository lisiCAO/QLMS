"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "user",
            [
                {
                    username: "Tom",
                    password_hash: "password",
                    email: "Tom@qlms.com",
                    role: "tenant",
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    username: "Jerry",
                    password_hash: "password",
                    email: "Jerry@qlms.com",
                    role: "landlord",
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("user", null, {});
    },
};
