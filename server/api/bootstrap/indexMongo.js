/*******************************************************************************
 *
 ** Index MongoDB

 ******************************************************************************/


const INDEX_MONGO = (list_index) => {
    for (let n of list_index) {
        global[n.c]
            .collection
            .createIndex(
                n.i,
                n.o,
                (e, r) => log.info(`[Mongodb][Index] ${n.c}: ${r}`)
            )
    }
}

// INDEX_MONGO([
//     { c: 'User', i: { email: 1 }, o: { unique: true } },
//     { c: 'User', i: { is_remove: 1 }, o: { unique: false } },
//     { c: 'User', i: { email: 1, is_remove: 1 }, o: { unique: false } },


//     { c: 'Personnel', i: { user_id: 1 }, o: { unique: false } },
//     { c: 'Personnel', i: { department_id: 1 }, o: { unique: false } },
//     { c: 'Personnel', i: { business_id: 1 }, o: { unique: false } },
//     { c: 'Personnel', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'Business', i: { name: 1 }, o: { unique: true } },
//     { c: 'Business', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'Category', i: { business_id: 1 }, o: { unique: false } },
//     { c: 'Category', i: { father_id: 1 }, o: { unique: false } },
//     { c: 'Category', i: { type: 1 }, o: { unique: false } },
//     { c: 'Category', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'Department', i: { business_id: 1 }, o: { unique: false } },
//     { c: 'Department', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'KeyResult', i: { objective_id: 1 }, o: { unique: false } },
//     { c: 'KeyResult', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'Objective', i: { okr_time_id: 1 }, o: { unique: false } },
//     { c: 'Objective', i: { personnel_id: 1 }, o: { unique: false } },
//     { c: 'Objective', i: { department_id: 1 }, o: { unique: false } },
//     { c: 'Objective', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'OkrTime', i: { is_remove: 1 }, o: { unique: false } },


//     { c: 'Position', i: { business_id: 1 }, o: { unique: false } },
//     { c: 'Position', i: { is_remove: 1 }, o: { unique: false } },
// ])