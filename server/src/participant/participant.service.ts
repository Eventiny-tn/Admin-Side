import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/event.entity';
import { Participant } from './participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    // @InjectRepository(Participant)
    // private participantRepository: Repository<Participant>,
    private connection: Connection,
  ) {}
  async buyTicket(user_id, event_id, body): Promise<Error | Object> {
    console.log(
      '=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
      user_id,
      event_id,
      body.quantity,
    );

    try {
      const participants = await this.connection
        .getRepository(Participant)
        .createQueryBuilder('participant') // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
        .leftJoinAndSelect('participant.event', 'event')
        .leftJoinAndSelect('participant.user', 'user')
        .where(`participant.event =${event_id}`)
        .andWhere(`participant.user =${user_id}`)
        .getOne();
      console.log('participant ============================', participants);

      if (!participants) {
        console.log('Creating reservation ...');
        let participant = await new Participant(body.quantity);
        participant.user = user_id;
        participant.event = event_id;
        await this.connection.manager.save(participant);
        return { message: 'done' };
      } else {
        console.log('Updating reservation ...');
        let newQuantity =
          (await (participants.quantity * 1)) + body.quantity * 1;
        await this.connection
          .getRepository(Participant)
          .createQueryBuilder('participant') // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
          .where(`id = ${participants.id} `)
          .update(Participant)
          .set({ quantity: newQuantity })
          .execute();
      }
    } catch (error) {
      console.log(error);
      return new error(error);
    }
  }
  async getParticipant(event_id, user_id): Promise<Error | Object> {
    const participant = await this.connection
      .getRepository(Participant)
      .createQueryBuilder('participant') // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
      .leftJoinAndSelect('participant.event', 'event')
      .leftJoinAndSelect('participant.user', 'user')
      .where(`participant.event =${event_id}`)
      .andWhere(`participant.user =${user_id}`)
      .getMany();
    return participant;
  }
}
