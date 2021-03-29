import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import moment from 'moment';
import * as moment from 'moment';
@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private connection: Connection,
  ) {}
  async addComment(ids, body): Promise<Error | string> {
    const comments = new Comment(body.comment);
    comments.commentator = ids.user_id;
    comments.event = ids.event_id;
    await this.connection.manager.save(comments);
    return 'progress';
  }
  async getAllEventComment(id: number): Promise<Error | object> {
    const comments = await this.commentRepository.find({
      relations: ['event', 'commentator'],
    });
    let allRelatedComment = [];
    await comments.map(async (element) => {
      if (element.event.id == id) {
        element.time = await moment(element.time).fromNow();
        allRelatedComment.push(element);
      }
    });
    return allRelatedComment;
  }
}
