import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { User } from './User'
import { Like } from './Like'

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)
Course.belongsToMany(User, { through: Favorite })
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })
User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })

export {
  Category,
  Course,
  Episode,
	Favorite,
  User,
  Like
}