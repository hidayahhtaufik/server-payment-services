const model = require('../models');
const {Member, Organization, Follower} = model;

const isOrganizationExist = async (organizationName) => {
  const organization = await Organization.findOne({
    where: {
      name: organizationName
    }
  })

  if (!organization) {
    throw new Error(`Organization with name ${organizationName} not found!`)
  }

  return organization
}

const isMemberExist = async (user) => {
  const member = await Member.findOne({
    where: {
      id: user
    }
  })

  if (!member) {
    throw new Error(`Member with userid ${user} not found!`)
  }

  return member
}

const listMembers = async (req, res) => {
  try {
    const organization = await isOrganizationExist(req.params.orgname)
    const list = await Member.findAll({
      where: {
        organizationId: organization.id
      },
      order: [
        ['followers', 'DESC']
      ]
    }).catch(err => { throw err })

    return res.send(list)
  } catch (error) {
    return res.status(400).send({
      error: error.message || "Some error when listing members."
    })
  }
};


module.exports = {
  listMembers,
  isOrganizationExist,
  isMemberExist
}