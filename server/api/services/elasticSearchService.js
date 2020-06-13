module.exports = self => {
    self.elasticSearchService = {
        PING: (db, next) => {
            self.ELASTIC_SEARCH[db]
                .cluster
                .health(
                    {},
                    (e, r, c) => (e) ? next(e) : next(null, r)
                )
        },
        INDEX: {
            CREATE: (db, index, next) => {
                self.ELASTIC_SEARCH[db]
                    .indices
                    .create(
                        { index },
                        (e, r, c) => {
                            if (
                                e &&
                                e.message &&
                                e.message.includes('[resource_already_exists_exception]')
                            ) return next()
                            if (e) return next(e)
                            next(null, r)
                        }
                    )
            },
            DELETE: (db, index, next) => {
                self.ELASTIC_SEARCH[db]
                    .indices
                    .delete(
                        { index },
                        (e, r, c) => (e) ? next(e) : next(null, r)
                    )
            },
            COUNT: (db, index, next) => {
                self.ELASTIC_SEARCH[db]
                    .count(
                        { index },
                        (e, r, c) => (e) ? next(e) : next(null, r.count)
                    )
            },
        },
        DOCUMENT: {
            INSERT: (db, index, id, body, next) => {
                self.ELASTIC_SEARCH[db]
                    .index(
                        { index, id, body },
                        (e, r, c) => (e) ? next(e) : next(null, { id, ...body })
                    )
            },
            UPDATE: (db, index, id, body, next) => {
                self.ELASTIC_SEARCH[db]
                    .update(
                        { index, id, body },
                        (e, r, c) => (e) ? next(e) : next(null, { id, ...body })
                    )
            },
            DELETE: (db, index, id, next) => {
                self.ELASTIC_SEARCH[db]
                    .delete(
                        { index, id },
                        (e, r, c) => (e) ? next(e) : next(null, r)
                    )
            },
            FIND_BY_ID: (db, index, id, next) => {
                self.ELASTIC_SEARCH[db]
                    .get(
                        { index, id },
                        (e, r, c) => (e) ? next(e) : next(null, r._source)
                    )
            },
            FIND: (db, index, query, next) => {
                self.ELASTIC_SEARCH[db]
                    .search(
                        {
                            index,
                            body: { query }
                        },
                        (e, r, c) => (e) ? next(e) : next(null, r.hits.hits)
                    )
            },
            COUNT: (db, index, query, next) => {
                self.ELASTIC_SEARCH[db]
                    .count(
                        {
                            index,
                            body: { query }
                        },
                        (e, r, c) => (e) ? next(e) : next(null, r.count)
                    )
            },
        }
    }
}