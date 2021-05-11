class Repository {
  constructor({ ResourceModel }) {
    this.ResourceModel = ResourceModel;
  }

  async create(params) {
    const resource = new this.ResourceModel(params);
    await resource.save();
    return resource;
  }

  async get(id) {
    const resource = await this.ResourceModel.findById(id);
    return resource;
  }

  async insert(params) {
    const resource = await this.ResourceModel.insert(params);
    return resource;
  }

  async findOne(query) {
    const resource = await this.ResourceModel.find(query).limit(1);
    return resource ? resource[0] : null;
  }

  async find(query) {
    const resource = await this.ResourceModel.find(query);
    return resource;
  }

  async findAll(query, pagination) {
    const count = await this.ResourceModel.count(query);

    const items = await this.ResourceModel.find(query)
      .limit(parseInt((pagination.pageSize), 10))
      .skip(parseInt((pagination.pageSize * pagination.pageNumber), 10));

    return {
      items,
      metadata: {
        count,
        page: parseInt((pagination.pageNumber), 10) || 0,
      },
    };
  }

  async update(query, params) {
    const resource = await this.ResourceModel.findOneAndUpdate(query, params, {
      new: true,
    });
    return resource;
  }

  async delete(id) {
    await this.ResourceModel.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err);
    });
  }
}

module.exports = Repository;
