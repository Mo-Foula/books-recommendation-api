import { PartialType } from '@nestjs/mapped-types';
import { CreateBooksRecommendationDto } from './create-books_recommendation.dto';

export class UpdateBooksRecommendationDto extends PartialType(CreateBooksRecommendationDto) {}
