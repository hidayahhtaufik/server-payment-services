const { validationResult } = require('express-validator')
const model = require('../models');
const {Comment} = model;
const { isOrganizationExist, isMemberExist } = require('./organizationController');

const createComment = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const { comment, user } = req.body;

  try {
    const organization = await isOrganizationExist(req.params.orgname)
    const member = await isMemberExist(user)
    console.log(organization, '<<< ORG')
    console.log(member, '<<<< MEMBER')
    const input = {
      comment: comment,
      memberId: member.id,
      organizationId: organization.id
    }

    Comment.create(input)
      .then(data => {
        res.send({
          message: `Comment to ${req.params.orgname } was created.`,
          data
        })
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Unable to save comment."
        });
      });
  } catch (error) {
    res.status(400).send({
      message: error.message || "Some error when posting comment."
    });
  }
};

const listComment = async (req, res) => {
  try {
    const organization = await isOrganizationExist(req.params.orgname)

    const list = await Comment.findAll({
      where: {
        organizationId: organization.id
      }
    })
      .catch(err => { throw err })

    return res.send(list)
  } catch (error) {
    return res.status(400).send({
      error: error.message
    })
  }
};

const deleteComment = async (req, res) => {
  try {
    const organization = await isOrganizationExist(req.params.orgname )
    await Comment.update(
        {
            isDeleted: true
        },
        {
        where: {
            organizationId: organization.id,
            returning: true
        }
    })
      .catch(err => { throw err })
    return res.send({
      message: `All comments to ${req.params.orgname } was deleted.`
    })
  } catch (error) {
    return res.status(400).send({
      error: error.message
    })
  }
};

module.exports = {
  createComment,
  listComment,
  deleteComment
}